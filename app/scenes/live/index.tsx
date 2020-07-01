import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeScreenParams } from 'navigation/screen-type-params';
import VideoList from 'molecules/live-stream-list';
import { VideoAsset } from 'core/dto/video-asset'
import liveStreamService from 'core/services/live-stream-service';
import { LiveStream } from 'core/dto/live-stream';


const Container = styled.View`
  flex: 1;

`;

type Props = StackScreenProps<HomeScreenParams, 'Home'>;

interface State {
  videos: LiveStream[]
}

export default class HomeScreen extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      videos: []
    }
  }
  componentDidMount() {
    liveStreamService.getAllLiveStreams().then((videos) => {
      this.setState({ videos })
    })
  }

  onItemPressed = async (item: LiveStream) => {
    const { navigation: { navigate } } = this.props;
    const [playback] = await liveStreamService.getPlayBackUrl(item.id);
    
    navigate('Playback', { video_url: playback.url })
  }

  render() {
    const { videos } = this.state;
    return (
      <Container>
        <VideoList
          items={videos}
          onItemPressed={this.onItemPressed}
        />
      </Container>
    );
  }
}


