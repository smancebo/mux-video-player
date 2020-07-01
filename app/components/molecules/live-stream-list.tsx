import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import styled from 'styled-components/native';
import ListItem from 'atoms/livestream-list-item'
import { LiveStream } from 'core/dto/live-stream';

interface VideoAssetListProps {
  items: LiveStream[],
  onItemPressed: (item: LiveStream) => void;
}

const VideoAssetList = (props: VideoAssetListProps) => {
  const { items, onItemPressed } = props;

  const onItemPress = (item: LiveStream) => {
    onItemPressed?.(item);
  }
  const renderItem = (e: ListRenderItemInfo<LiveStream>) => {
    const { item, index } = e;
    return (
      <ListItem
        livestream={item}
        name={`Video ${index + 1}`}
        onPress={onItemPress}
      />
    )
  }

  const keyExtractor = (item: LiveStream) => (item.id)

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
}

export default VideoAssetList;