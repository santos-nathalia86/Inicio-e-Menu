import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
   Modal,
} from "react-native";

import iconVoltar from "../assets/iconVoltar.png";
import perfil from "../assets/perfil.png";
import pessaos from "../assets/pessoas.png";
import sair from "../assets/sair.png";

import App from "../App";

export default function ActionModal() {
    const [visibleModal, setVisibleModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cabecalhoMenu}>
        <TouchableOpacity 
         onPress={() => setVisibleModal(true)}
        >
          <Image
            source={iconVoltar}
            style={{
              tintColor: "white",
              width: 20,
              height: 25,
              //marginTop: '10%',
              left: "6%",
              top: "100%",
              // left: 41.36,
            }}
          ></Image>
        </TouchableOpacity>

        <Text style={styles.txtTitulo}> Menu </Text>
      </View>

       <Modal
        visible={visibleModal}
        transparent={true}
        onRequestClose={() => setVisibleModal(false)}
      >
        <App />
      </Modal> 

      <View style={styles.opcoes}>
        <Image
          source={perfil}
          style={{
            tintColor: "gray",
            width: 30,
            height: 25,
            //marginTop: '15%',
            left: "6%",
            //textAlign:'center',
            //right: 20,
            // top: 53.85,
            // left: 41.36,
          }}
        ></Image>
        <Text style={styles.txtItem}> Perfil </Text>
      </View>

      <View style={styles.opcoes}>
        <Image
          source={pessaos}
          style={{
            tintColor: "gray",
            width: 30,
            height: 25,
            //marginTop: '15%',
            left: "6%",
            //textAlign:'center',
            //right: 20,
            // top: 53.85,
            // left: 41.36,
          }}
        ></Image>
        <Text style={styles.txtItem}> Pacientes </Text>
      </View>

      <View style={styles.logout}>
        <Image
          source={sair}
          style={{
            tintColor: "gray",
            width: 30,
            height: 25,
            //marginTop: '15%',
            left: "6%",
            //textAlign:'center',
            //right: 20,
            // top: 53.85,
            // left: 41.36,
          }}
        ></Image>
        <Text style={styles.txtItem}> Log out </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  cabecalhoMenu: {
    backgroundColor: "#5C2E7E",
    justifyContent: "center",
    height: "15%",
    //verticalAlign: 'middle',
  },
  txtTitulo: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    verticalAlign: "bottom",
  },
  opcoes: {
    marginTop: 30,
    flexDirection: "row",
    //position: 'relative',
    left: 20,
  },
  txtItem: {
    left: 20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
  logout: {
    flexDirection: "row",
    left: 20,
    marginTop:'110%',
  }
});
