<%@page import="kosta.dailyBlog"%>
<%@page import="java.util.List"%>
<%@page import="net.sf.json.JSONArray"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
  pageEncoding="EUC-KR"%>
<%!List<dailyBlog> list;%>


<%
  String contents = request.getParameter("contents");
  String title = request.getParameter("title");
  String writer = request.getParameter("writer");

  if (list == null) {
    list = new ArrayList<dailyBlog>();
    if (title != null) {
      list.add(new dailyBlog(contents, title, writer));
    }
  } else if (title != null) {
    list.add(new dailyBlog(contents, title, writer));
  }

  if (list != null && list.size() != 0) {
    String json = JSONArray.fromObject(list).toString();
    out.print(json);
  }

//   System.out.println("ok");
%>