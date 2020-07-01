import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { VideoAsset } from 'core/dto/video-asset';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Image from 'react-native-fast-image';


interface VideoListItemProps {
  video_asset: VideoAsset;
  name: string;
  onPress: (video_asset: VideoAsset) => void;
}

const getImageThumbnail = (id: string) => `https://image.mux.com/${id}/thumbnail.png?width=107&height=60&fit_mode=pad`
const getDuration = (duration: number) => duration.toFixed(2);

const Title = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

const ListItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fff;
  padding: 8px
  align-items: center;
`;

const ImageContainer = styled.View`
  width: 107px;
  height: 60px;
  background-color: #222;
  margin-right: 8px
`;
const InfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
const VideoInfo = styled.View`
  flex: 1;
  justify-content: center;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const ListItem = (props: VideoListItemProps) => {
  const { name, onPress, video_asset } = props;
  const { duration, max_stored_frame_rate, max_stored_resolution, playback_ids } = video_asset;
  const [first] = playback_ids;
  const imageUrl = getImageThumbnail(first.id);
  return (
    <ListItemContainer onPress={() => onPress(video_asset)}>
      <ImageContainer>
        <Image resizeMode="cover" source={{ uri: imageUrl }} style={{ width: 107, height: 60 }} />
      </ImageContainer>
      <InfoContainer>
        <VideoInfo>
          <Title>{name}</Title>
          <Text>{`${getDuration(duration)} seg`}</Text>
          <Text>{`quality ${max_stored_resolution}`}</Text>
          <Text>{`FPS ${max_stored_frame_rate}`}</Text>
        </VideoInfo>
        <IconContainer>
          <AntDesign name="right" size={30} />
        </IconContainer>
      </InfoContainer>
    </ListItemContainer>
  )
}

export default ListItem;
