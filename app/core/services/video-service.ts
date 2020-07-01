import Service from './base-service';
import { VideoAsset, PlaybackUrl } from 'core/dto/video-asset';

class VideoService extends Service {
  async getAllVideos() {
    try {
      const { data } = await this.get<VideoAsset[]>('get-all');
      return data;
    } catch (e) {
      throw e;
    }
  }

  async getVideoById(id: string) {
    const params = {
      id,
    }
    try {
      const { data } = await this.get<VideoAsset>(`get-by-id`, { params });
      return data;
    } catch (e) {
      throw e;
    }
  }

  async getPlayBackUrl(id: string) {
    const params = {
      id,
    }
    try {
      const { data } = await this.get<PlaybackUrl[]>(`get-playback-url`, { params });
      return data;
    } catch (e) {
      throw e;
    }
  }
}

export default new VideoService('/video-assets');
