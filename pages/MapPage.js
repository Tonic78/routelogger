import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default function MapPage() {
  const mapRegion = {
    latitude: 52.379189,
    longitude: 4.899431,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return <MapView style={styles.map} region={mapRegion} />;
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
