import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function NewEntryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>기록 작성 화면 (MVP 템플릿)</Text>
      <Text>TODO: 입력 폼 연결 및 SQLite 저장 로직 구현</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 10 },
  title: { fontSize: 22, fontWeight: '700' }
});
