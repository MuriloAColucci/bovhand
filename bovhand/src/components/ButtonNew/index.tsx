import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function ButtonNew({ size }) {
    return (
        <RectButton style={styles.container}>
            <Entypo name="plus" size={size} color={theme.colors.white} />
        </RectButton>
    );
}
