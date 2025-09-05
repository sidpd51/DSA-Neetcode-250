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

	// preorder: Root -> Left -> Right
	preorder(node = this.root) {
		if (node) {
			console.log(node.value);
			this.preorder(node.left);
			this.preorder(node.right);
		}
	}

	// Inorder: Left -> Root -> Right
	inorder(node = this.root) {
		if (node) {
			this.preorder(node.left);
			console.log(node.value);
			this.preorder(node.right);
		}
	}

	// postorder: Left -> Right -> Root
	postorder(node = this.root) {
		if (node) {
			this.preorder(node.left);
			this.preorder(node.right);
			console.log(node.value);
		}
	}
}

const tree = new BinaryTree("A");
tree.root.left = new BinaryTreeNode("B");
tree.root.right = new BinaryTreeNode("C");
tree.root.left.left = new BinaryTreeNode("D");
tree.root.left.right = new BinaryTreeNode("E");
tree.root.right.left = new BinaryTreeNode("F");
tree.root.right.right = new BinaryTreeNode("G");

console.log("Preorder:");
tree.preorder(); // A, B, D, E, C, F, G
console.log("\n");

console.log("Inorder:");
tree.inorder(); // D, B, E, A, F, C, G
console.log("\n");

console.log("Postorder:");
tree.postorder(); // D, E, B, F, G, C, A
console.log("\n");
