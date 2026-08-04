const KIT_BASE_URL = "https://api.kit.com/v4";

/**
 * Minimal Kit v4 client. Never throws — every call resolves to
 * { success, status, data?, error? }.
 */
export async function kitRequest(method, endpoint, body = null) {
  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    return { success: false, status: 0, error: "KIT_API_KEY is not configured" };
  }

  try {
    const options = {
      method,
      headers: {
        "X-Kit-Api-Key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${KIT_BASE_URL}${endpoint}`, options);
    const contentType = response.headers.get("content-type") || "";
    const data = contentType.includes("application/json")
      ? await response.json()
      : null;

    if (!response.ok) {
      // Kit v4 errors are { errors: ["<string>"] }; tolerate { message } objects too.
      const first = data?.errors?.[0];
      const error =
        typeof first === "string" ? first : first?.message || response.statusText;
      return { success: false, status: response.status, error };
    }

    return { success: true, status: response.status, data };
  } catch (error) {
    return { success: false, status: 0, error: error.message };
  }
}

/**
 * Create (or update — v4 create is an upsert: 201 new, 200 existing) a subscriber.
 */
export function createSubscriber(email) {
  return kitRequest("POST", "/subscribers", { email_address: email });
}

/**
 * Tag a subscriber into the newsletter (KIT_TAG_ID).
 */
export function addToNewsletter(email) {
  return kitRequest("POST", `/tags/${process.env.KIT_TAG_ID}/subscribers`, {
    email_address: email,
  });
}
