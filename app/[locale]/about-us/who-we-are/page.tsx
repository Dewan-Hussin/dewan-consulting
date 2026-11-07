import WhoWeAre from "@/app/features/about/components/WhoWeAre";
import CtaSection from "@/app/features/about/components/CtaSection";
import PrinciplesSection from "@/app/features/about/components/PrinciplesSection";
import StatsBand from "@/app/features/about/components/StatsBand";
import StorySection from "@/app/features/about/components/StorySection";
import TeamSection from "@/app/features/about/components/TeamSection";
import Ticker from "@/app/features/about/components/Ticker";
import TimelineSection from "@/app/features/about/components/TimelineSection";

export default function WhoWeArePage() {
  return (
    <>
      <WhoWeAre />
      <Ticker />
      {/* <StorySection />
      
      <StatsBand /> */}

      {/* 
      <PrinciplesSection />
      <TimelineSection />
      <TeamSection />
      <CtaSection /> */}
    </>
  );
}
