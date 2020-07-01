import React from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeScreenParams } from 'navigation/screen-type-params';

type Props = StackScreenProps<HomeScreenParams, 'Playback'>;

interface State {
  video_url: string;
}

export default class Playback extends React.Component<Props, State> {
  videoPlayer: Video;

  constructor(props: Props) {
    super(props);
    this.state = {
      video_url: ''
    }
  }

  componentDidMount() {
    const { navigation, route } = this.props;
    const { video_url } = route.params;
    this.setState({ video_url })
  }

  fullscreen = () => {
    setTimeout(() => {
      this.videoPlayer.presentFullscreenPlayer();
    }, 500);
  }

  handlePlayerRef = (e: any) => {
    this.videoPlayer = e;
  }
  render() {
    const { video_url = '' } = this.state;
    return (
      <View>
        {
          video_url !== '' && (
            <Video
              source={{ uri: video_url }}
              ref={this.handlePlayerRef}
              onReadyForDisplay={this.fullscreen}
              style={{ width: '100%', height: 400 }}
            />
          )
        }
        
      </View>
    );
  }
} 