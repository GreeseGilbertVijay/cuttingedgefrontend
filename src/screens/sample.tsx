import React, { useEffect, useState } from "react";
import { Alert, Linking } from "react-native";
import VersionCheck from "react-native-version-check";

const App = () => {
  const [updateUrl, setUpdateUrl] = useState("");

  useEffect(() => {
    const checkForUpdate = async () => {
      try {
        const res = await VersionCheck.needUpdate();
        console.log("Update Check Response:", res);

        if (res.isNeeded) {
          setUpdateUrl(res.storeUrl);
          showUpdateAlert(res.storeUrl);
        }
      } catch (error) {
        console.error("Error checking version:", error);
      }
    };

    checkForUpdate();
  }, []);

  const showUpdateAlert = (url: string) => {
    Alert.alert(
      "New Update Available",
      "A new version of the app is available. Please update to continue.",
      [
        { text: "Later", style: "cancel" },
        {
          text: "Update Now",
          onPress: async () => {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
              Linking.openURL(url);
            } else {
              Alert.alert("Error", "Unable to open update link.");
            }
          },
        },
      ]
    );
  };

  return <></>;
};

export default App;
