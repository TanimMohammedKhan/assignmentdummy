import React, { useMemo, useState } from "react";
import { Table, Badge, Pagination } from "react-bootstrap";
import articles from "../data/articles";

const PAGE_SIZE = 3; 

const statusVariant = {
  Cpmpleted: "success",
  InProgress: "warning",
  Planned: "info"
};


function timeAgo(iso) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const sec = Math.floor(diffMs / 1000);
  const min = Math.floor(sec / 60);
  const hr  = Math.floor(min / 60);
  const day = Math.floor(hr / 24);
  if (day > 0) return `${day} day${day > 1 ? "s" : ""} ago`;
  if (hr > 0)  return `${hr} hour${hr > 1 ? "s" : ""} ago`;
  if (min > 0) return `${min} minute${min > 1 ? "s" : ""} ago`;
  return `just now`;
}

const ArticlesPage = () => {
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(articles.length / PAGE_SIZE);

  const visible = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return articles.slice(start, start + PAGE_SIZE);
  }, [page]);

  return (
    <div>
      <h1 className="page-title">My Journals</h1>

      <div className="card-like">
        <Table hover responsive className="align-middle">
          <thead>
            <tr>
              <th style={{ width: "55%" }}>Journals</th>
              <th style={{ width: "20%" }}></th>
              <th style={{ width: "25%" }}>Last Edited</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((a) => (
              <tr key={a.id}>
                <td className="fw-semibold">{a.title}</td>
                <td>
                  <Badge pill bg={statusVariant[a.status] || "secondary"}>
                    {a.status}
                  </Badge>
                </td>
                <td className="text-muted">{timeAgo(a.lastEdited)}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination */}
        <div className="d-flex justify-content-center py-3">
          <Pagination>
            <Pagination.Prev disabled={page === 1} onClick={() => setPage((p) => p - 1)} />
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <Pagination.Item key={n} active={n === page} onClick={() => setPage(n)}>
                {n}
              </Pagination.Item>
            ))}
            <Pagination.Next disabled={page === pageCount} onClick={() => setPage((p) => p + 1)} />
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
