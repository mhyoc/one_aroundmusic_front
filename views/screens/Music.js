import React from "react";
import { StyleSheet, SafeAreaView, View, FlatList, Image } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import Header from "../components/Header";
import FilterButton from "../components/FilterButton";
import SongList from "../components/SongList";
import { TouchableOpacity } from "react-native-gesture-handler";

const FILTER = [
  {
    id: 1,
    title: "나이",
  },
  {
    id: 2,
    title: "성별",
  },
  {
    id: 3,
    title: "날씨",
  },
  {
    id: 4,
    title: "시간",
  },
  {
    id: 5,
    title: "계절",
  },
];

const DATA = [
  {
    id: 1,
    tag: "#태그",
  },
];

const SONG = [
  {
    title: "신호등",
    singer: "이무진",
    date: "2022 . 04 . 22",
    image: require("../../assets/music1.jpg"),
  },
  {
    title: "Super Shy",
    singer: "NewJeans",
    date: "2023 . 07 . 21",
    image: require("../../assets/album/album5.png"),
  },
  {
    title: "퀸카(Queencard)",
    singer: "(여자)아이들",
    date: "2023 . 05 . 15",
    image: require("../../assets/album/album6.png"),
  },
  {
    title: "I AM",
    singer: "IVE(아이브)",
    date: "2023 . 04 . 22",
    image: require("../../assets/album/album4.png"),
  },
  {
    title: "Spicy",
    singer: "aespa",
    date: "2023 . 05 . 08",
    image: require("../../assets/album/album8.png"),
  },
  {
    id: 3,
    title: "벚꽃엔딩",
    singer: "버스커 버스커",
    date: "2013 . 04 . 22",
    image: require("../../assets/album/album3.png"),
  },
  {
    id: 1,
    title: "봄봄봄",
    singer: "로이킴",
    date: "2013 . 04 . 22",
    image: require("../../assets/album/album1.png"),
  },
  {
    id: 2,
    title: "봄이좋냐",
    singer: "10cm",
    date: "2013 . 04 . 22",
    image: require("../../assets/album/album2.png"),
  },
  {
    id: 3,
    title: "벚꽃엔딩",
    singer: "버스커 버스커",
    date: "2013 . 04 . 22",
    image: require("../../assets/album/album3.png"),
  },
];

const Music = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => navigation.navigate("MyPage")} />

      <View style={{ flexDirection: "row" }}>
        <FlatList
          style={styles.filter}
          data={FILTER}
          renderItem={({ item }) => (
            <FilterButton
              color="#EBEBEB"
              textColor="#656565"
              title={item.title}
              onPress={() => navigation.navigate("Filter")}
            />
          )}
          numColumns={5}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
          <Image
            style={{ marginTop: 34, width: 20, height: 20, marginRight: 20 }}
            source={require("../../assets/filterIcon.png")}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.selected}
        data={DATA}
        renderItem={({ item }) => (
          <FilterButton color="#034AA6" textColor="#ffffff" title={item.tag} />
        )}
        numColumns={3}
      />
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={SONG}
          renderItem={({ item }) => (
            <SongList
              image={item.image}
              title={item.title}
              singer={item.singer}
              date={item.date}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  scrollView: {
    marginTop: 27,
    width: 400,
    height: 650,
    marginLeft: 16,
  },
  text: {
    fontSize: 42,
  },
  filter: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 16,
    height: 30,
  },
  selected: {
    height: 30,
    marginTop: 16,
    marginLeft: 16,
  },
});

export default Music;
