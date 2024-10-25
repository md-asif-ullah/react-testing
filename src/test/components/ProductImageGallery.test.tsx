import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("renders an image gallery", () => {
    const imageUrls = [
      "https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/0455d/AiArtBefore.avif",
      "https://letsenhance.io/static/5bb3254cad4372d876b9c54149710989/4b49a/ForPrintingBefore.avif",
    ];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
  });

  it("does not render an image gallery when no image URLs are provided", () => {
    render(<ProductImageGallery imageUrls={[]} />);
    const images = screen.queryAllByRole("img");
    expect(images).toHaveLength(0);
  });
});
