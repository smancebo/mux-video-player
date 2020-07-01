import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import styled from 'styled-components/native';
import ListItem from 'atoms/video-list-item'
import { VideoAsset } from 'core/dto/video-asset';

interface VideoAssetListProps {
  items: VideoAsset[],
  onItemPressed: (item: VideoAsset) => void;
}

const VideoAssetList = (props: VideoAssetListProps) => {
  const { items, onItemPressed } = props;

  const onItemPress = (item: VideoAsset) => {
    onItemPressed?.(item);
  }
  const renderItem = (e: ListRenderItemInfo<VideoAsset>) => {
    const { item, index } = e;
    return (
      <ListItem
        video_asset={item}
        name={`Video ${index + 1}`}
        onPress={onItemPress}
      />
    )
  }

  const keyExtractor = (item: VideoAsset) => (item.id)

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
}

export default VideoAssetList;