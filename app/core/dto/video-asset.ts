type TrackType = 'video' | 'audio';
type Policy = 'public' | 'private';

export interface PlaybackIds {
  policy: Policy;
  id: string;
}

export interface Track {
  type: TrackType;
  max_width: number;
  max_height: number;
  max_frame_rate: number;
  id: string;
  duration: number;
}

export interface VideoAsset {
	id: string;
	max_stored_resolution: string;
	max_stored_frame_rate: number;
	aspect_ratio: string;
  mp4_support: string;
	master_access: string;
	duration: number;
  created_at: string;
  status: string;
  tracks: Track[];
  playback_ids: PlaybackIds[];

}
export interface PlaybackUrl {
  thumbnail: string;
  url: string
}