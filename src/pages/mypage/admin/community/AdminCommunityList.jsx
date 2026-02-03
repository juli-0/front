import React, { useState } from "react";
import PostManage from "./PostManage";
import CommentManage from "./CommentManage";
import S from "./style";

const TABS = [
	{ id: "posts", label: "게시글 관리" },
	{ id: "comments", label: "댓글 관리" },
];

const AdminCommunityList = () => {
	const [activeTab, setActiveTab] = useState("posts");

	return (
		<S.PageContainer>
			<S.TabContainer>
				{TABS.map((tab) => (
					<S.TabButton
						key={tab.id}
						type="button"
						$active={activeTab === tab.id}
						onClick={() => setActiveTab(tab.id)}
					>
						{tab.label}
					</S.TabButton>
				))}
			</S.TabContainer>

			<S.ContentSection>
				{activeTab === "posts" ? <PostManage /> : <CommentManage />}
			</S.ContentSection>
		</S.PageContainer>
	);
};

export default AdminCommunityList;
