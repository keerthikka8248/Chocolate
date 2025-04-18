import { useEffect, useState } from "react";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products/getHomepageReviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  const styles = {
    section: {
      padding: "60px 20px",
      background: "linear-gradient(to bottom, #fff8f0, #ffeacc)",
      textAlign: "center",
      minHeight: "100vh",
    },
    heading: {
      fontSize: "36px",
      fontFamily: "'Pacifico', cursive",
      color: "#4E342E",
      marginBottom: "40px",
      animation: "fadeIn 1s ease-in-out",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "15px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
      padding: "20px",
      maxWidth: "300px",
      width: "100%",
      animation: "slideUp 0.8s ease-in-out forwards",
    },
    image: {
      width: "100%",
      height: "180px",
      borderRadius: "10px",
      objectFit: "cover",
      marginBottom: "15px",
    },
    name: {
      fontWeight: "bold",
      fontSize: "18px",
      marginBottom: "5px",
      color: "#5D4037",
    },
    rating: {
      color: "#FFD700",
      fontSize: "18px",
      marginBottom: "10px",
    },
    comment: {
      fontSize: "14px",
      color: "#6D4C41",
      marginBottom: "10px",
    },
    product: {
      fontSize: "13px",
      fontStyle: "italic",
      color: "#8D6E63",
    },
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
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <section style={styles.section}>
        <h2 style={styles.heading}>What Our Customers Say</h2>
        <div style={styles.grid}>
          {reviews.map((review) => (
            <div key={review._id} style={styles.card}>
              <img
                src={review.productImage}
                alt={review.productName}
                style={styles.image}
              />
              <div style={styles.name}>{review.name}</div>
              <div style={styles.rating}>{"⭐️".repeat(review.rating)}</div>
              <div style={styles.comment}>"{review.comment}"</div>
              <div style={styles.product}>– {review.productName}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CustomerReviews;
