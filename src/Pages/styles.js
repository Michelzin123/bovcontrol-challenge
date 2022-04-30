import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export const Container = styled.View`
	flex: 1;
	padding-top: 50px;
	background: #FFF
`;

//${Platform.OS === 'ios' ? 50 : StatusBar.currentHeight}px
export const ScrollContainer = styled.ScrollView`
	flex: 1;
	padding-top: 20px;
	background: #FFF
`;

export const Title = styled.Text`
	font-size: 28px;
	font-weight: bold;
	padding: 10px 20px;
`;

export const ButtonTitle = styled.Text`
	font-size: 20px;
	font-weight: bold;
	text-align: center;
`;

export const Input = styled.TextInput.attrs({
	placeholderTextColor: '#999',
})`
	flex: 1;
	padding: 12px 15px;
	border-radius: 4px;
	font-size: 16px;
	color: #333;
	background: #FFF;

	margin: 10px 20px;

	border: 2px;
	border-radius: 8px;
	border-color: #e3e3e3;
`;
//background: #04db77;
export const NewButton = styled.TouchableOpacity`
	background: #46a0cd;
	border-radius: 4px;
	margin: 20px 80px;
	padding: 5px 5px;
	justify-content: center;
	flex-direction: row;
`;

export const List = styled.FlatList.attrs({
	contentContainerStyle: { paddingHorizontal: 20 },
	showsVerticalScrollIndicator: false,
})`
	margin-top: 20px;
`;

export const SectionTitle = styled.Text`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 15px;
`;

export const NumbersSection = styled.View`
	padding: 20px;
`;

export const DescriptionSection = styled.View.attrs({
	marginHorizontal: 10,
})`
	margin-top: 5px;
	padding: 20px 20px;
	background: #f7f7f7;
	border-radius: 15px;
`;

export const FarmerName = styled.Text`
	font-size: 22px;
	font-weight: bold;
	margin-top: 20px;
	padding: 5px 20px;
`;

export const FarmName = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #46a0cd;
	padding: 5px 20px;
`;

export const Supervision = styled.Text`
	font-size: 16px;
	font-weight: bold;
	text-align: center;
`;

export const Item = styled.Text`
	font-size: 18px;
`;

export const NumbersRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-left: 30px;
	margin-right: 30px;
`;

export const LineRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-right: 80px;
`;

export const LineText = styled.Text`
	font-weight: bold;
	font-size: 16px;
	margin-top: 5px;
`;

export const LineTextNumber = styled.Text`
	font-weight: bold;
	font-size: 20px;
	margin-top: 5px;
	margin-right: 5px;
`;

export const TextNumber = styled.Text`
	font-weight: bold;
	color: black;
	font-size: 25px;
	margin-right: 20px;
`;

export const Dates = styled.Text`
	font-size: 14px;
	line-height: 20px;
`;

export const EditButton = styled.TouchableOpacity`
	background: #46a0cd;
	border-radius: 4px;
	margin-top: 20px
	margin-bottom: 40px;
	margin-right: 30px;
	margin-left: 30px;
	padding: 5px 5px;
	justify-content: center;
	flex-direction: row;
`;

export const FormRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-left: 30px;
	margin-right: 30px;
`;