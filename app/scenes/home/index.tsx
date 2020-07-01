import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeScreenParams } from 'navigation/screen-type-params';
import VideoService from 'core/services/video-service';
import VideoList from 'molecules/video-asset-list';
import { VideoAsset } from 'core/dto/video-asset'
import videoService from 'core/services/video-service';


const Container = styled.View`
  flex: 1;
  
`;

type Props = StackScreenProps<HomeScreenParams, 'Home'>;

interface State {
  videos: VideoAsset[]
}

export default class HomeScreen extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      videos: []
    }
  }
  componentDidMount() {
    videoService.getAllVideos().then((videos) => {
      this.setState({ videos })
    })
  }

  onItemPressed = async (item: VideoAsset) => {
    const { navigation: { navigate } } = this.props;
    const [playback] = await videoService.getPlayBackUrl(item.id);
    
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


