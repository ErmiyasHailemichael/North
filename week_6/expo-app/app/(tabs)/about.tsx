import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

const skills = [
  "React Native",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Expo",
  "Next.js",
];

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>About Me</Text>

      {/* Bio Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Who I Am</Text>
        <Text style={styles.cardText}>
          I am a passionate web and mobile developer with experience in building
          modern applications. I love working with React, Node.js, and exploring
          new technologies.
        </Text>
      </View>

      {/* Skills Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {skills.map((skill) => (
            <View key={skill} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Contact Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contact</Text>
        <Text style={styles.cardText}>
          Feel free to reach out at contact@myportfolio.com
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  card: {
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 22,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillBadge: {
    backgroundColor: "#333",
    padding: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  skillText: {
    color: "#fff",
    fontSize: 14,
  },
});