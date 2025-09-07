class BinaryTreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor(value) {
		this.root = new BinaryTreeNode(value);
	}

	// Preorder DFS
	preorder(node = this.root) {
		if (node) {
			console.log(node.value);
			this.preorder(node.left);
			this.preorder(node.right);
		}
	}

	// Inorder DFS
	inorder(node = this.root) {
		if (node) {
			this.preorder(node.left);
			console.log(node.value);
			this.preorder(node.right);
		}
	}

	// postorder DFS
	postorder(node = this.root) {
		if (node) {
			this.preorder(node.left);
			this.preorder(node.right);
			console.log(node.value);
		}
	}
}

/*
	dfs can be done in 2 ways 
	1. Recursive
	2. Iterative
*/


