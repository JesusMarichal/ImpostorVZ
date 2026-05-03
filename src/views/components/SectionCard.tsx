import React, {ReactNode} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

interface SectionCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({title, subtitle, children}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cardBackground,
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
});

export default SectionCard;
