import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Test from "../images/forest.jpg";

const PublicationsPost = () => {
  const navigation = useNavigation();
  const handleCommentsRedirect = (way) => {
    navigation.navigate("CommentsScreen");
  };

  const handleMapRedirect = () => {
    navigation.navigate("MapScreen");
  };
  return (
    <View style={{ marginBottom: 32 }}>
      <View style={{ marginBottom: 8 }}>
        <Image source={Test} resizeMode={"cover"} style={styles.image} />
      </View>
      <Text style={styles.name}>forest</Text>
      <View style={styles.aboutContainer}>
        <View style={styles.aboutLeftContainer}>
          <TouchableOpacity onPress={handleCommentsRedirect}>
            <Ionicons name="chatbubble-outline" size={24} color="#FF6C00" />
          </TouchableOpacity>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.aboutRightContainer}>
          <TouchableOpacity onPress={handleMapRedirect}>
            <Feather name="map-pin" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={[styles.text, { textDecorationLine: "underline" }]}>
            Chernivtsi
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PublicationsPost;
const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },
  name: {
    marginBottom: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  aboutContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  aboutLeftContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  aboutRightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});