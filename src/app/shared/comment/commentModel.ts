export class CommentModel {

    commentId: number;
    text: string;
    timestamp: Date;
    postId: number;
    userId: number;
    username: string;
    replies: Array<CommentModel>;
    isDeleted: boolean;
    reactionCount: number;

}