import { useEffect, useState, useRef } from "react";

const Specials = () => {
  const [specials, setSpecials] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerView = 4;
  const containerRef = useRef();

  useEffect(() => {
    fetch("http://localhost:5000/api/products/specials")
      .then((res) => res.json())
      .then((data) => setSpecials(data))
      .catch((error) => console.error("Error fetching specials:", error));
  }, []);

  const styles = {
    section: {
      paddingTop: "10px",
      paddingBottom: "20px",
      background: "linear-gradient(to bottom, #fff3e0, #ffe0b2)",
      textAlign: "center",
      minHeight: "100vh",
    },
    heading: {
      fontSize: "36px",
      marginBottom: "30px",
      fontFamily: "'Pacifico', cursive",
      color: "#4E342E",
      animation: "fadeIn 1.2s ease-in-out",
    },
    sliderContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    slider: {
      display: "flex",
      overflow: "hidden",
      width: "90%",
    },
    innerSlider: {
      display: "flex",
      transition: "transform 0.5s ease",
    },
    card: {
      position: "relative",
      flex: "0 0 280px",
      margin: "0 15px",
      background: "#fff",
      borderRadius: "20px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
      overflow: "hidden",
      animation: "slideUp 1s ease forwards",
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      background: "#f5f5f5",
    },
    content: {
      padding: "20px",
    },
    title: {
      fontSize: "20px",
      color: "#3E2723",
      marginBottom: "10px",
      fontWeight: "bold",
    },
    description: {
      fontSize: "14px",
      color: "#6d4c41",
      marginBottom: "10px",
    },
    rating: {
      fontSize: "16px",
      color: "#FFD700", // gold stars
    },
    arrow: {
      fontSize: "28px",
      cursor: "pointer",
      padding: "10px",
      color: "#6d4c41",
      userSelect: "none",
    },
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1); // Slide 1 at a time
  };

  const handleNext = () => {
    if (startIndex + cardsPerView < specials.length)
      setStartIndex(startIndex + 1); // Slide 1 at a time
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <section style={styles.section}>
        <h2 style={styles.heading}>Our Signature Treats</h2>

        <div style={styles.sliderContainer}>
          {startIndex > 0 && (
            <span onClick={handlePrev} style={styles.arrow}>
              &#8249;
            </span>
          )}

          <div style={styles.slider} ref={containerRef}>
            <div
              style={{
                ...styles.innerSlider,
                transform: `translateX(-${startIndex * (280 + 30)}px)`,
              }}
            >
              {specials.map((product) => (
                <div key={product._id} style={styles.card}>
                  {/* Optional Tag
                  <div style={styles.tag}>Chef's Pick</div> */}

                  <img
                    src={product.image}
                    alt={product.name}
                    style={styles.image}
                  />
                  <div style={styles.content}>
                    <h3 style={styles.title}>{product.name}</h3>
                    <p style={styles.description}>
                      {product.description?.slice(0, 60)}...
                    </p>
                    <div style={styles.rating}>
                      {"⭐️".repeat(product.rating || 4)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {startIndex + cardsPerView < specials.length && (
            <span onClick={handleNext} style={styles.arrow}>
              &#8250;
            </span>
          )}
        </div>
      </section>
    </>
  );
};

export default Specials;
