async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating a Slow Data Fetch to display loading
  return <p>Customers Page</p>;
}

export default Page;
