import BaseService from 'core/services/base-service';
import { LiveStream } from 'core/dto/live-stream';
import { PlaybackUrl } from 'core/dto/video-asset';

class LiveStreamService extends BaseService {
  async getAllLiveStreams() {
    try {
      const { data } = await this.get<LiveStream[]>('get-all');
      return data;
    } catch (e) {
      throw e;
    }
  }

  async getLiveStreamsById(id: string) {
    try {
      const params = {
        id,
      }
      const { data } = await this.get<LiveStream>('get-by-id', { params });
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

export default new LiveStreamService('live-stream')