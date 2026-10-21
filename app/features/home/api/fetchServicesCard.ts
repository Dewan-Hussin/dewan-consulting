export async function fetchServicesCard() {
  try {
    const res = await fetch("/api/home/services");

    if (!res.ok) {
      let message = "Something went wrong";

      try {
        const errorData = await res.json();
        message = errorData.message || message;
      } catch {}

      throw new Error(message);
    }

    const data = await res.json();

    if (!data) {
      throw new Error("Invalid server response");
    }


    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
