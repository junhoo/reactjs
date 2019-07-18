import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendVipItem, RecommendSelectItem } from '../style';

class Recommend extends PureComponent {
	const 
	render() {
		return (
			<RecommendWrapper>
				{/* <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/> */}
				<RecommendVipItem/>
				<RecommendSelectItem/>
			</RecommendWrapper>
		)
	}
}

export default Recommend;