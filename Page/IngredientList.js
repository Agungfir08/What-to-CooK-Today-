import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../config/colors";
import ingredients from "../assets/dummy data/ingredients";
import IngredientItem from "../components/IngredientItem";

/**
 * Page used by user to submit their already have ingredients.
 * 
 * @param {navigation} navigation - navigation to another page. 
 * 
 */

function IngredientList({ navigation }) {

  const [selected, setSelected] = useState([]);   // list of already have ingredients selected by user.

  // continue button on press handler to show search result.
  const handlePress = () => {
    if (selected.length === 0) return;
    else navigation.navigate("FoodList", { selected: selected });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.black}>
        {" "}
      </StatusBar>
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.sectionTitle}>Select your ingredients!</Text>

          <View style={styles.info}>
            <Text style={{ color: "#555555" }}>
              We assume you already have typical pantry items. Such as water,
              salt, flour, etc.
            </Text>
          </View>

          <View
            style={{
              padding: 5,
              marginBottom: selected.length === 0 ? 0 : 40,
            }}>
            {ingredients.map((category) => (
              <View style={styles.categoriesWrapper} key={category.id}>
                <View style={styles.categoryTitleWrapper}>
                  <Image source={category.image} style={styles.categoryImage} />
                  <Text style={styles.categoryTitle}>{category.name}</Text>
                </View>
                <View
                  style={{
                    height: 0.75,
                    width: "100%",
                    backgroundColor: colors.black,
                  }}></View>
                <View style={styles.itemWrapper}>
                  {category.children.map((item) => (
                    <IngredientItem
                      key={item.id}
                      name={item.name}
                      selected={selected}
                      setSelected={setSelected}></IngredientItem>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={selected.length === 0 ? 1 : 0.6}>
        <View
          onPress={handlePress}
          style={[
            styles.continueWrapper,
            {
              backgroundColor:
                selected.length === 0 ? "#f1f1f1" : colors.mainGreen,
              opacity: selected.length === 0 ? 0 : 1,
            },
          ]}>
          <Text
            onPress={handlePress}
            style={[
              styles.continueText,
              { color: selected.length === 0 ? colors.black : colors.white },
            ]}>
            Continue
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.navBar}>
        <View style={styles.navWrapper}>
          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => navigation.navigate("Main")}>
            <Ionicons
              name="home-outline"
              color={colors.white}
              size={24}
              style={{ right: 4 }}></Ionicons>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.sectionWrapper}>
              <Image
                style={styles.pantry}
                source={require("../assets/fridge-green.png")}></Image>
              <Text style={styles.sectionText}>Pantry</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => navigation.navigate("ShoppingCart")}>
            <Ionicons
              name="cart-outline"
              color={colors.white}
              size={24}></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => navigation.navigate("UserDetails")}>
            <Ionicons
              name="person-outline"
              color={colors.white}
              size={24}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sectionTitle: {
    fontSize: 27.5,
    fontWeight: "bold",
    marginBottom: 8,
    marginHorizontal: 24,
    marginTop: 10,
  },
  info: {
    marginBottom: 15,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderColor: colors.darkGrey,
    borderWidth: 1,
    borderRadius: 7,
  },
  categoriesWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: colors.black,
    elevation: 10,
    borderRadius: 7,
    marginHorizontal: 20,
    marginBottom: 15,
    backgroundColor: colors.white,
  },
  categoryTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    //justifyContent: 'space-between'
  },
  categoryImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginLeft: 10,
  },
  categoryTitle: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  itemWrapper: {
    marginHorizontal: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },
  continueWrapper: {
    width: 150,
    height: 40,
    borderRadius: 70,
    position: "absolute",
    bottom: 13,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    elevation: 6,
  },
  continueText: {
    fontSize: 20,

    fontWeight: "bold",
  },
  navBar: {
    width: "100%",
    backgroundColor: colors.mainGreen,
  },
  navWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
  },
  sectionWrapper: {
    backgroundColor: colors.white,
    padding: 8,
    paddingHorizontal: 18,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  sectionText: {
    fontSize: 13,
    color: colors.mainGreen,
    left: 0,
    fontWeight: "500",
  },
  pantry: {
    width: 23,
    height: 23,
    right: 4,
  },
});

export default IngredientList;
