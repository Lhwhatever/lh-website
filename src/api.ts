export async function fetchData<T>(
    endpoint: string,
    params?: ResponseInit
): Promise<T> {
    const response = await fetch(endpoint, params);
    if (response.ok) return (await response.json()) as T;
    throw new Error(response.statusText);
}
