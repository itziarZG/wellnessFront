import Videos from "@/app/components/Videos";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Celia Wellness</h1>
      <Videos />
    </main>
  );
}
