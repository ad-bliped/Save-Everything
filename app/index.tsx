import { useEffect } from 'react';
import { Link } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { initializeDatabase } from '@/db/init';

export default function HomeScreen() {
  useEffect(() => {
    initializeDatabase().catch(console.error);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Foorink</Text>
      <Text style={styles.description}>음식 / 커피 / 와인 / 위스키 감상 기록</Text>

      <View style={styles.linkList}>
        <Link href="/new-entry" style={styles.link}>+ 새 기록 작성</Link>
        <Link href="/settings" style={styles.link}>설정 (백업/연동)</Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 20 },
  title: { fontSize: 28, fontWeight: '700' },
  description: { fontSize: 16, color: '#555' },
  linkList: { gap: 12 },
  link: { fontSize: 18, color: '#0a84ff' }
});
