"use client";

import { ActionButton, FeatureSectionMedia } from "@/model/GetDataModel";
import Link from "next/link";

interface FeatureSectionProps {
  featureSectionActionButton?: ActionButton | null;
  featureSectionDescription?: string;
  featureSectionLabel?: string;
  featureSectionMedia?: FeatureSectionMedia;
  featureSectionTitle?: string;
}
const FeatureSection = ({
  featureSectionTitle,
  featureSectionDescription,
  featureSectionActionButton,
}: FeatureSectionProps) => (
  <div>
    <h2>{featureSectionTitle}</h2>
    <p>{featureSectionDescription}</p>
    {featureSectionActionButton && (
      <Link href={featureSectionActionButton.buttonUrl}>
        {featureSectionActionButton.buttonText}
      </Link>
    )}
  </div>
);
export default FeatureSection;
