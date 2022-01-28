import { GenericHeading } from "@/interfaces/generic";

export interface MissionAndVisionBannerProps extends GenericHeading {
    mission: string;
    vision: string;
    missionIcon: any;
    visionIcon: any;
    background: any;
}