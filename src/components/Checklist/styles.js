import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export const Container = styled(LinearGradient).attrs({
	colors: ['#f2f2f2', '#FFF'],
	start: { x: 0, y: 0},
	end: { x: 1, y: 1},
})`
	padding: 20px;
	border-radius: 15px;
	background: #FFF;
	margin-bottom: 15px;
	border: 0.15px;

	box-shadow: 0 5px 15px #333;
`;

export const Name = styled.Text`
	font-size: 18px;
	font-weight: bold;
`;

export const Farm = styled.Text`
	font-size: 16px;
	margin-top: 5px;
	line-height: 20px;
	font-weight: bold;
	color: #46a0cd;
`;

export const DatesTitle = styled.Text`
	font-weight: bold;
	font-size: 14px;
	margin-top: 10px;
	line-height: 20px;
`;

export const Dates = styled.Text`
	font-size: 14px;
	line-height: 20px;
`;

export const RowContent = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;