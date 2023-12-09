import { useState } from "react";

const FootButtons = () => {
  const totalPages = 40;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    const visiblePages = Math.min(totalPages, 4);
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    for (
      let i = startPage;
      i <= Math.min(startPage + visiblePages - 1, totalPages);
      i++
    ) {
      buttons.push(
        <button
          className={`customers__foot-btn ${i === currentPage ? "active" : ""}`}
          key={i}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="customers__foot-actions">
      <button className="customers__foot-btn" onClick={handlePrevClick}>
        {"<"}
      </button>
      {renderPageButtons()}
      {totalPages > 4 && <span className="customers__foot-dots">...</span>}
      <button className="customers__foot-btn">{totalPages}</button>
      <button className="customers__foot-btn" onClick={handleNextClick}>
        {">"}
      </button>
    </div>
  );
};

export default FootButtons;
