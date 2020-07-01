
import { PlaybackIds } from './video-asset';
type Status = 'idle'

export interface NewAssetSettings {
  playback_policies: string[]
}

export interface LiveStream {
  test: boolean;
  stream_key: string;
  status: Status;
  reconnect_window: number;
  playback_ids: PlaybackIds[];
  new_asset_settings: NewAssetSettings;
  id: string;
  created_at: string;
}