import { Attribution } from "@/components/attribution";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Victor Crest 26 London 80K Followers 803K Likes 1.4K Photos</div>
      <Attribution
        name={"YOUR NAME HERE"}
        link={"https://www.frontendmentor.io/profile/YOUR-PROFILE-NAME-HERE"}
      />
    </main>
  );
}
