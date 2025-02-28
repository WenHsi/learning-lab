document.addEventListener("DOMContentLoaded", function () {
  toggleDropdown(".page-content", ".crl-summernote-hide");
  toggleDropdown(".page-meta", ".crl-metaPage-hide");
  toggleDropdown(".page-public", ".crl-metaPage-hide");

  function toggleDropdown(triggerOfPageSection, hideItems) {
    const triggerOfPage = document.querySelectorAll(
      `${triggerOfPageSection} .toggle-btn`
    );
    triggerOfPage.forEach((label) => {
      label.addEventListener("click", function (event) {
        // 隱藏所有 .crl-*-hide
        const allHideItems = document.querySelectorAll(
          `${triggerOfPageSection} ${hideItems}`
        );

        // allHideItems.forEach((item) => {
        //   item.classList.add("hideItem");
        // });

        // 顯示該 hideItems
        const triggerOneHideItems = event.target.nextElementSibling;
        const another = event.target.parentNode.nextElementSibling;

        if (triggerOneHideItems?.classList.contains("hideItem")) {
          triggerOneHideItems.classList.add(
            "animate__animated",
            "animate__fadeIn"
          );
          triggerOneHideItems?.classList.remove("hideItem");
        } else {
          triggerOneHideItems?.classList.add("hideItem");
        }
      });
    });
  }
});

$(document).ready(function () {
  let checkTimeout = null;

  const articleId = "<%= foundArticle._id %>";

  $("#publicPath")
    .on("mouseenter", function () {
      $(this).prop("disabled", false);
    })
    .on("mouseleave", function () {
      $(this).prop("disabled", true);
    });

  $("#summernoteZh").summernote({
    // default
    // https://github.com/summernote/summernote/blob/a9512de7f2e20db866ba02708fb7209147f5dedf/src/js/base/settings.js#L209
    lang: "zh-TW",
    placeholder: "請輸入文章內容（中文）...",
    // airMode: true,
    followingToolbar: true,
    // popover
    popatmouse: true,
    popover: {
      image: [
        ["resize", ["resizeFull", "resizeHalf", "resizeQuarter", "resizeNone"]],
        ["float", ["floatLeft", "floatRight", "floatNone"]],
        ["remove", ["removeMedia"]],
      ],
      link: [["link", ["linkDialogShow", "unlink"]]],
      table: [
        ["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]],
        ["delete", ["deleteRow", "deleteCol", "deleteTable"]],
      ],
      air: [
        ["style", ["style"]],
        ["font", ["bold", "underline", "strikethrough", "italic", "clear"]],
        ["fontname", ["fontsize"]],
        ["color", ["color"]],
        ["para", ["ul", "ol", "paragraph"]],
        ["table", ["table"]],
        ["insert", ["link", "picture", "video", "height", "hr"]],
        ["view", ["codeview", "undo", "redo", "help"]],
      ],
    },
    toolbar: [
      ["style", ["style"]],
      ["font", ["bold", "underline", "strikethrough", "italic", "clear"]],
      ["fontname", ["fontsize"]],
      ["color", ["color"]],
      ["para", ["ul", "ol", "paragraph"]],
      ["table", ["table"]],
      ["insert", ["link", "picture", "video", "height", "hr"]],
      ["view", ["fullscreen", "codeview", "undo", "redo", "help"]],
    ],
    fontSizes: [
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
    ],
    styleTags: [
      "p",
      // 'pre',
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
    ],
    fontNames: [
      "sans-serif",
      "serif",
      "Arial",
      "Arial Black",
      "Comic Sans MS",
      "Courier New",
      "Helvetica Neue",
      "Helvetica",
      "Impact",
      "Lucida Grande",
      "Tahoma",
      "Times New Roman",
      "Verdana",
    ],
    lineHeights: [
      "0.5",
      "0.6",
      "0.7",
      "0.8",
      "0.9",
      "1.0",
      "1.2",
      "1.4",
      "1.5",
      "1.6",
      "1.8",
      "2.0",
      "3.0",
    ],
    tabDisable: true,
    // airMode: true,
    callbacks: {
      onImageUpload: function (files) {},
      onImageLinkInsert: function (url) {
        const imgNode = document.createElement("img");
        imgNode.setAttribute("loading", "lazy");
        imgNode.setAttribute("src", url);
        $("#summernoteZh").summernote("insertNode", imgNode);
      },
      onChange: function (e) {
        // console.log("Key up event:", e);
        // var content = $("#summernoteZh").summernote("code");
        const setImgParentClass = () => {
          const imgList = document.querySelectorAll("img");
          for (let i = 0; i < imgList.length; i++) {
            imgList[i].parentNode.classList.add("d-sm-block");
            imgList[i].parentNode.classList.add("d-md-flex");
            imgList[i].parentNode.classList.add("gap-2");
          }
        };

        const removeElementOfEmptyProperty = () => {
          const divs = document.querySelectorAll("div");
          const ps = document.querySelectorAll("p");
          divs.forEach((div) => {
            const hasImg = div.querySelector("img") !== null;
            if (!hasImg) {
              div.classList.remove("d-sm-block");
              div.classList.remove("d-md-flex");
              div.classList.remove("gap-2");

              if (div.classList.length === 0) {
                div.removeAttribute("class");
              }
            }
          });
          ps.forEach((p) => {
            const hasImg = p.querySelector("img") !== null;
            if (!hasImg) {
              p.classList.remove("d-sm-block");
              p.classList.remove("d-md-flex");
              p.classList.remove("gap-2");

              if (p.classList.length === 0) {
                p.removeAttribute("class");
              }
            }
          });
        };
        setImgParentClass();
        removeElementOfEmptyProperty();
      },
      onPaste: function (e) {
        var bufferText = (
          (e.originalEvent || e).clipboardData || window.clipboardData
        ).getData("Text");
        e.preventDefault();
        document.execCommand("insertText", false, bufferText);
      },
    },
  });
  $("#summernoteZh").on("summernote.image.upload", function (we, files) {
    // upload image to server and create imgNode...
    if (!files || !files.length) {
      console.error("No files selected for upload.");
      return;
    }
    // upload image to server and create imgNode...
    var formData = new FormData();
    formData.append("image", files[0]);
    // console.log(formData);

    $.ajax({
      url: "https://www.volandosatoyama.com/fusenadmin/uploads/images",
      type: "post",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        // 從服務器獲取圖片的URL
        var imageUrl = response.imageUrl;

        // 創建 img 元素
        var imgNode = document.createElement("img");
        imgNode.setAttribute("loading", "lazy");
        imgNode.src = imageUrl;

        // 插入圖片節點到編輯器中
        $("#summernoteZh").summernote("insertNode", imgNode);
      },
      error: function (xhr, status, error) {
        console.error("Error uploading image:", error);
      },
    });
    // $("#summernoteZh").summernote("insertNode", imgNode);
  });

  $("#summernoteEn").summernote({
    // default
    // https://github.com/summernote/summernote/blob/a9512de7f2e20db866ba02708fb7209147f5dedf/src/js/base/settings.js#L209
    lang: "zh-TW",
    placeholder: "請輸入文章內容（英文）...",
    // airMode: true,
    followingToolbar: true,
    // popover
    popatmouse: true,
    popover: {
      image: [
        ["resize", ["resizeFull", "resizeHalf", "resizeQuarter", "resizeNone"]],
        ["float", ["floatLeft", "floatRight", "floatNone"]],
        ["remove", ["removeMedia"]],
      ],
      link: [["link", ["linkDialogShow", "unlink"]]],
      table: [
        ["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]],
        ["delete", ["deleteRow", "deleteCol", "deleteTable"]],
      ],
      air: [
        ["style", ["style"]],
        ["font", ["bold", "underline", "strikethrough", "italic", "clear"]],
        ["fontname", ["fontsize"]],
        ["color", ["color"]],
        ["para", ["ul", "ol", "paragraph"]],
        ["table", ["table"]],
        ["insert", ["link", "picture", "video", "height", "hr"]],
        ["view", ["codeview", "undo", "redo", "help"]],
      ],
    },
    toolbar: [
      ["style", ["style"]],
      ["font", ["bold", "underline", "strikethrough", "italic", "clear"]],
      ["fontname", ["fontsize"]],
      ["color", ["color"]],
      ["para", ["ul", "ol", "paragraph"]],
      ["table", ["table"]],
      ["insert", ["link", "picture", "video", "height", "hr"]],
      ["view", ["fullscreen", "codeview", "undo", "redo", "help"]],
    ],
    fontSizes: [
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
    ],
    styleTags: [
      "p",
      // 'pre',
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
    ],
    fontNames: [
      "sans-serif",
      "serif",
      "Arial",
      "Arial Black",
      "Comic Sans MS",
      "Courier New",
      "Helvetica Neue",
      "Helvetica",
      "Impact",
      "Lucida Grande",
      "Tahoma",
      "Times New Roman",
      "Verdana",
    ],
    lineHeights: [
      "0.5",
      "0.6",
      "0.7",
      "0.8",
      "0.9",
      "1.0",
      "1.2",
      "1.4",
      "1.5",
      "1.6",
      "1.8",
      "2.0",
      "3.0",
    ],
    tabDisable: true,
    // airMode: true,
    callbacks: {
      onImageUpload: function (files) {},
      onImageLinkInsert: function (url) {
        const imgNode = document.createElement("img");
        imgNode.setAttribute("loading", "lazy");
        imgNode.setAttribute("src", url);
        $("#summernoteEn").summernote("insertNode", imgNode);
      },
      onChange: function (e) {
        // console.log("Key up event:", e);
        // var content = $("#summernoteZh").summernote("code");
        const setImgParentClass = () => {
          const imgList = document.querySelectorAll("img");
          for (let i = 0; i < imgList.length; i++) {
            imgList[i].parentNode.classList.add("d-sm-block");
            imgList[i].parentNode.classList.add("d-md-flex");
            imgList[i].parentNode.classList.add("gap-2");
          }
        };

        const removeElementOfEmptyProperty = () => {
          const divs = document.querySelectorAll("div");
          const ps = document.querySelectorAll("p");
          divs.forEach((div) => {
            const hasImg = div.querySelector("img") !== null;
            if (!hasImg) {
              div.classList.remove("d-sm-block");
              div.classList.remove("d-md-flex");
              div.classList.remove("gap-2");

              if (div.classList.length === 0) {
                div.removeAttribute("class");
              }
            }
          });
          ps.forEach((p) => {
            const hasImg = p.querySelector("img") !== null;
            if (!hasImg) {
              p.classList.remove("d-sm-block");
              p.classList.remove("d-md-flex");
              p.classList.remove("gap-2");

              if (p.classList.length === 0) {
                p.removeAttribute("class");
              }
            }
          });
        };
        setImgParentClass();
        removeElementOfEmptyProperty();
      },
      onPaste: function (e) {
        var bufferText = (
          (e.originalEvent || e).clipboardData || window.clipboardData
        ).getData("Text");
        e.preventDefault();
        document.execCommand("insertText", false, bufferText);
      },
    },
  });
  $("#summernoteEn").on("summernote.image.upload", function (we, files) {
    // upload image to server and create imgNode...
    if (!files || !files.length) {
      console.error("No files selected for upload.");
      return;
    }
    // upload image to server and create imgNode...
    var formData = new FormData();
    formData.append("image", files[0]);
    // console.log(formData);

    $.ajax({
      url: "https://www.volandosatoyama.com/fusenadmin/uploads/images",
      type: "post",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        // 從服務器獲取圖片的URL
        var imageUrl = response.imageUrl;

        // 創建 img 元素
        var imgNode = document.createElement("img");
        imgNode.setAttribute("loading", "lazy");
        imgNode.src = imageUrl;

        // 插入圖片節點到編輯器中
        $("#summernoteEn").summernote("insertNode", imgNode);
      },
      error: function (xhr, status, error) {
        console.error("Error uploading image:", error);
      },
    });
    // $("#summernoteEn").summernote("insertNode", imgNode);
  });

  $("#searchBox").on("input", function () {
    clearTimeout(searchTimeout);
    const searchTerm = $(this).val().toLowerCase();
    searchTimeout = setTimeout(function () {
      window.location.href = `/fusenadmin/articles?search=${searchTerm}&limit=${$(
        "#limitFilter"
      ).val()}&tags=${$("#tagsFilter").val()}`;
    }, 2000);
  });

  $("#articleForm").on("submit", function (e) {
    e.preventDefault();

    const isFeaturedChecked = $("#isFeatured").prop("checked");
    if (!isFeaturedChecked) {
      $("#isFeatured").val("off");
    } else {
      $("#isFeatured").val("on");
    }

    const formData = {
      meta: {
        title: {
          zh: $("#metaTitleZh").val(),
          en: $("#metaTitleEn").val(),
        },
        description: {
          zh: $("#metaDescriptionZh").val(),
          en: $("#metaDescriptionEn").val(),
        },
        keywords: {
          zh: $("#keywordsZh").val(),
          en: $("#keywordsEn").val(),
        },
        subject: {
          zh: $("#metaSubjectZh").val(),
          en: $("#metaSubjectEn").val(),
        },
        og: {
          image: {
            zh: $("#ogImagePathZh").val(),
            en: $("#ogImagePathEn").val(),
          },
          type: $("#ogType").val(),
        },
      },
      author: $("#author").val(),
      publicPath: $("#publicPath").val(),
      title: {
        zh: $("#titleZh").val(),
        en: $("#titleEn").val(),
      },
      content: {
        zh: $("#summernoteZh").val(),
        en: $("#summernoteEn").val(),
      },
      showTip: {
        zh: $("#showTipZh").val(),
        en: $("#showTipEn").val(),
      },
      publishDate: $("#publishDate").val(),
      unpublishDate: $("#unpublishDate").val(),
      tags: $("#tagsFilter").val(),
      isFeatured: $("#isFeatured").val(),
      note: $("#note").val(),
    };

    $.ajax({
      url: `/fusenadmin/articles/${articleId}/edit`,
      type: "PUT",
      contentType: "application/json",
      data: JSON.stringify(formData),
      success: function (response) {
        // alert("文章已成功保存！");
        console.log("文章已成功保存:", response);
        window.location.href = `/fusenadmin/articles/`;
      },
      error: function (error) {
        alert("保存文章時出錯。內容請自行備份，以免遺失！");
        console.error("保存文章時出錯:", error);
        // window.location.href = `/fusenadmin/articles/${articleId}/edit`;
      },
    });
  });

  $("#titleEn").on("input", function () {
    clearTimeout(checkTimeout);
    checkTimeout = setTimeout(() => {
      $.ajax({
        url: `/api/generate-slug`,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
          text: $(this).val(),
        }),
        success: function (response) {
          $("#suggestionPathEn").text("/" + response.slug);
        },
        error: function (error) {
          $("#suggestionPathEn").text("資料取得失敗");
        },
      });
    }, 1000);
  });

  $("#titleZh").on("input", function () {
    clearTimeout(checkTimeout);
    checkTimeout = setTimeout(() => {
      $.ajax({
        url: `/api/generate-slug`,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
          text: $(this).val(),
        }),
        success: function (response) {
          $("#suggestionPathZh").text("/" + response.slug);
        },
        error: function (error) {
          $("#suggestionPathEn").text("資料取得失敗");
        },
      });
    }, 1000);
  });

  let checkTimeout2 = null;
  $("#saveAndShowZh,#saveAndShowEn").on("click", function (e) {
    e.preventDefault();
    clearTimeout(checkTimeout2);
    checkTimeout2 = setTimeout(() => {
      const isFeaturedChecked = $("#isFeatured").prop("checked");
      if (!isFeaturedChecked) {
        $("#isFeatured").val("off");
      } else {
        $("#isFeatured").val("on");
      }

      const formData = {
        meta: {
          title: {
            zh: $("#metaTitleZh").val(),
            en: $("#metaTitleEn").val(),
          },
          description: {
            zh: $("#metaDescriptionZh").val(),
            en: $("#metaDescriptionEn").val(),
          },
          keywords: {
            zh: $("#keywordsZh").val(),
            en: $("#keywordsEn").val(),
          },
          subject: {
            zh: $("#metaSubjectZh").val(),
            en: $("#metaSubjectEn").val(),
          },
          og: {
            image: {
              zh: $("#ogImagePathZh").val(),
              en: $("#ogImagePathEn").val(),
            },
            type: $("#ogType").val(),
          },
        },
        author: $("#author").val(),
        publicPath: $("#publicPath").val(),
        title: {
          zh: $("#titleZh").val(),
          en: $("#titleEn").val(),
        },
        content: {
          zh: $("#summernoteZh").val(),
          en: $("#summernoteEn").val(),
        },
        showTip: {
          zh: $("#showTipZh").val(),
          en: $("#showTipEn").val(),
        },
        publishDate: $("#publishDate").val(),
        unpublishDate: $("#unpublishDate").val(),
        tags: $("#tagsFilter").val(),
        isFeatured: $("#isFeatured").val(),
        note: $("#note").val(),
      };

      $.ajax({
        url: `/fusenadmin/articles/${articleId}/edit`,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(formData),
        success: function (response) {
          console.log("文章已成功保存:", response);
          if (e.target.id === "saveAndShowZh") {
            window.location.href = `./preview-zh`;
          } else {
            window.location.href = `./preview-en`;
          }
        },
        error: function (error) {
          alert("自動保存文章出錯！");
          console.error("保存文章時出錯:", error);
        },
      });
    }, 1000);
  });
});
