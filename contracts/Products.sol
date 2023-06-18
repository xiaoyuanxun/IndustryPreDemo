// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract ProductsChain {

    struct Product {
        string productName;
        string productDescription;
        string productSerialNumber;
        uint256 timestamp;
        mapping(uint256 => ProductLink) productLink;
        uint256 productLinkCount;
    }

    struct ProductLink {
        string productName;
        string productDescription;
        string productSerialNumber;
        uint256 timestamp;
    }
    
    uint256 productIndex;
    mapping(uint256 => Product) private products;

    // 新建一个产品链
    function createProductChain(
        string memory _productName,
        string memory _productDescription,
        string memory _productSerialNumber,
        uint256 _timestamp
    ) public {
        Product storage newProduct = products[productIndex];
        newProduct.productName = _productName;
        newProduct.productDescription = _productDescription;
        newProduct.productSerialNumber = _productSerialNumber;
        newProduct.timestamp = _timestamp;
        newProduct.productLinkCount = 0;

        productIndex++;
    }   

    // 查询产品链
    function addProductLink(
        uint256 _productIndex,
        string memory _productName,
        string memory _productDescription,
        string memory _productSerialNumber,
        uint256 _timestamp
    ) public {
        require(_productIndex < productIndex, "Invalid product index");

        Product storage product = products[_productIndex];

        ProductLink memory newLink = ProductLink(
            _productName,
            _productDescription,
            _productSerialNumber,
            _timestamp
        );

        product.productLink[product.productLinkCount] = newLink;
        product.productLinkCount++;
    }

    // 查询现有产品链条
    function getProductChain(uint256 _productIndex) public view returns (ProductLink[] memory) {
        require(_productIndex < productIndex, "Invalid product index");

        Product storage product = products[_productIndex];
        uint256 linkCount = product.productLinkCount;

        ProductLink[] memory chain = new ProductLink[](linkCount);

        for (uint256 i = 1; i <= linkCount; i++) {
            chain[i - 1] = product.productLink[i];
        }

        return chain;
    }
}
