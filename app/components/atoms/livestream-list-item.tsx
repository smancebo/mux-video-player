import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Image from 'react-native-fast-image';
import { LiveStream } from 'core/dto/live-stream';


interface VideoListItemProps {
  livestream: LiveStream;
  name: string;
  onPress: (livestream: LiveStream) => void;
}

const getImageThumbnail = (id: string) => `https://image.mux.com/${id}/thumbnail.png?width=107&height=60&fit_mode=pad`


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
  const { name, onPress, livestream } = props;
  const { status, playback_ids } = livestream;
  const [first] = playback_ids;
  const imageUrl = getImageThumbnail(first.id);
  return (
    <ListItemContainer onPress={() => onPress(livestream)}>
      <ImageContainer>
        <Image resizeMode="cover" source={{ uri: imageUrl }} style={{ width: 107, height: 60 }} />
      </ImageContainer>
      <InfoContainer>
        <VideoInfo>
          <Title>{name}</Title>
          <Text>{`status ${status}`}</Text>
        </VideoInfo>
        <IconContainer>
          <AntDesign name="right" size={30} />
        </IconContainer>
      </InfoContainer>
    </ListItemContainer>
  )
}

export default ListItem;