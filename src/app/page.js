"use client";
import { CrossIcon } from "@/assets/icons";
import LikeOpinion from "@/components/LikeOpinion";
import PraiseFeatures from "@/components/PraiseFeatures";
import StarRating from "@/components/StarRating";
import { useState } from "react";

export default function Home() {
  const [feed, setFeed] = useState("");
  const [safetyReview, setSafetyReview] = useState(0)
  const [commReview, setCommReview] = useState(0)
  const [likeOpinion, setLikeOpinion] = useState(true)
  const [praises, setPraises] = useState([])

  const handleSafetyReview = (data) => {
    setSafetyReview(data)
  };

  const handleCommReview = (data) => {
    setCommReview(data)
  };

  const handleLikeOpinion = (data) => {
    setLikeOpinion(data)
  };

  const handlePraiseFeatures = (data) => {
    setPraises(data)
  };

  const handlePostReview = () => {
    const review = {
      safetyReview,
      commReview,
      likeOpinion,
      praises,
      feed
    }
    console.log(review);
  };

  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="m-3 self-start cursor-pointer">
        <CrossIcon className="h-8 w-8" />
      </div>
      <div className="px-4 divide-y sm:flex sm:gap-6 sm:divide-y-0">
        <div className="sm:flex-1">
          <h1>Leave a review</h1>
          <div className="mt-8 divide-y">
            <div className="space-y-3 py-6">
              <h3>Safety</h3>
              <p className="sub-txt">How safe did you feel with us?</p>
              <StarRating onRate={handleSafetyReview} />
            </div>
            <div className="space-y-3 py-6">
              <h3>Communication</h3>
              <p className="sub-txt">How easy to communicate with us us?</p>
              <StarRating onRate={handleCommReview} />
            </div>
            <div className="space-y-3 py-6">
              <h3>Would you recommend us?</h3>
              <p className="sub-txt">Your opinion is safe with us</p>
              <LikeOpinion onChange={handleLikeOpinion} />
            </div>
          </div>
        </div>
        <div className="sm:flex-1">
          <div className="divide-y">
            <div className="space-y-3 py-6">
              <h3>Praise</h3>
              <p className="sub-txt">What features describe us?</p>
              <PraiseFeatures onSelect={handlePraiseFeatures} />
            </div>
            <div className="space-y-3 py-6">
              <h3>How was your experience?</h3>
              <p className="sub-txt">
                Share your overall experience and make suggestions that help us
                to improve
              </p>
              <textarea
                onChange={(e) => setFeed(e.target.value)}
                value={feed}
                rows={8}
                className="w-full border-2 border-neutral-300 p-4 rounded-lg"
                placeholder="Anything you'd like to add? Comment your thoughts"
              />
            </div>
            <div className="py-6">
              <button
                onClick={handlePostReview}
                className="rounded-lg bg-emerald-500 hover:bg-emerald-600 w-full p-2 text-neutral-100 font-semibold text-lg"
              >
                Post Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
