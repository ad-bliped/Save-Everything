import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>설정</Text>
      <Text>- 로컬 JSON 백업/복원</Text>
      <Text>- Notion / Google Drive 연동 (추후)</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 10 },
  title: { fontSize: 22, fontWeight: '700' }
});
