import React, { useCallback, useRef, useMemo, useState, useEffect } from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import BottomSheet, {
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { Header } from "../../components/Header";
import {PlanetaryProps} from './interface'
import api from '../../services/api'



export function Home() {
  const [dados, setDados] = useState<PlanetaryProps>();
  useEffect(() => {
     api.get<PlanetaryProps>('planetary/apod?api_key=PalN7kA0ZdyHAGoyIjS3lPogYXuriHGWs5LwKP3Y').then((response) => {
      setDados(response.data)
    /*   console.log(response.data) */
     })
  },[])

  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ["10%", "40%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);

  // render
  const renderItem = useCallback(
    (item) => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );

  return (
    <>
     <Header /> 
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: dados?.url}} />
        <BottomSheet
          ref={sheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
          backdropComponent={() =>
            <View style={styles.backDropContainer}/>
          }
        >
          <BottomSheetScrollView
            contentContainerStyle={styles.contentContainer}
          >
            <Text style={styles.title}>{dados?.title}</Text>
            <Text style={styles.content}>
              {dados?.explanation}
            </Text>
            <Text style={styles.subTitle}>Copyright:</Text>
            <Text style={styles.author}>{dados?.copyright}</Text>
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
    color: "#FFF",
    alignContent: "center",
    textAlign: "center",
    marginBottom: 40,
  },
  content: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
    color: "#FFF",
    alignContent: "center",
    textAlign: "center",
  },
  image: {
    flex: 1
  },
  subTitle: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
    color: "#FFF",
    alignContent: "center",
    fontWeight: "bold",
  },
  author: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Montserrat_400Regular",
  },
  contentContainer: {
    backgroundColor: "#11162A", 

  },
  backDropContainer: {
    backgroundColor: "#11162A", 
    color:"#11162A"
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});

