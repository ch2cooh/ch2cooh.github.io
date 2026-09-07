# 최용건 · 프로필

사이트: https://ch2cooh.github.io/

한 줄 소개, 학력·회사 이력 타임라인, 국책과제·사내 프로젝트로 구성한 개인 소개 페이지입니다. `index.html`에 내용과 디자인이 들어 있으며 별도 설치나 빌드 없이 GitHub Pages에서 동작합니다.

현재 이름과 소속, 담당 업무만 확인된 상태입니다. 실제 사진, 학력, 재직 기간, 프로젝트 목록은 제공받은 내용으로 채웁니다. 사진을 넣기 전에는 이름의 첫 글자를 표시하며, 등록하지 않은 학력과 프로젝트에는 빈 상태를 표시합니다.

## 한 줄 소개

`index.html`의 `class="one-line"` 문구를 바꿉니다. 현재 문구:

> SBS AI파트너십팀에서 국책 R&D 과제와 사내 AX 전환을 담당합니다.

## 사진 넣기

1. 저장소에 `assets/profile.jpg`라는 경로로 사진을 올립니다. 세로 비율의 사진을 권장합니다.
2. `PHOTO` 주석 아래의 `<div class="portrait" ...>...</div>`를 다음으로 바꿉니다.

```html
<div class="portrait">
  <img src="assets/profile.jpg" alt="최용건 프로필 사진" width="480" height="600">
</div>
```

PNG나 WebP 사진이라면 실제 파일명에 맞춰 `src`를 수정합니다. 사진의 위아래 위치는 `.portrait img`의 `object-position` 값으로 조절할 수 있습니다. 이미지 파일이 있어야 이 마크업으로 바꿉니다.

## 회사 이력 추가

`CAREER` 주석 아래 `<ol id="career-timeline">` 안에 아래 형식의 항목을 추가합니다. 아래 대괄호 안의 값은 설명용이며 실제 정보로 바꿉니다. 최신 이력을 위에 둡니다.

```html
<li class="timeline-item">
  <span class="period">[시작 연월] – [종료 연월]</span>
  <h4 class="timeline-title">[회사명]</h4>
  <p class="timeline-subtitle">[팀 / 직책]</p>
  <p class="timeline-detail">[주요 담당 업무]</p>
</li>
```

현재 재직 중인 항목에만 `class="timeline-item is-current"`를 사용합니다. 현재 SBS 항목은 재직 시작일이 확인되면 `현재`를 `YYYY.MM – 현재`로 바꿉니다.

## 학력 추가

`EDUCATION` 주석 아래의 `empty-history` 문단을 다음으로 교체합니다. 추가 학력은 `<li>`를 복사해 같은 `<ol>` 안에 넣습니다.

```html
<ol class="timeline" id="education-timeline">
  <li class="timeline-item">
    <span class="period">[입학 연월] – [졸업 연월]</span>
    <h4 class="timeline-title">[학교명]</h4>
    <p class="timeline-subtitle">[학과 / 학위]</p>
  </li>
</ol>
```

## 프로젝트 추가

국책과제는 `id="national-projects"`, 사내 프로젝트는 `id="internal-projects"` 영역에 넣습니다. 해당 영역의 `empty-projects` 문단을 다음으로 바꿉니다. 다음 프로젝트부터는 `<li class="project">...</li>`만 복사해 같은 목록에 추가합니다. 최신 프로젝트를 위에 둡니다.

```html
<ol class="project-list">
  <li class="project">
    <span class="period">[시작 연월] – [종료 연월 또는 진행 중]</span>
    <h4>[프로젝트명]</h4>
    <p class="project-role">[담당 역할] · [수행기관 또는 협업 부서]</p>
    <p class="project-description">[실제로 수행한 내용이나 성과를 한두 문장으로 작성]</p>
  </li>
</ol>
```

필요한 경우 해당 프로젝트 안에 확인 가능한 자료 링크를 추가합니다.

```html
<a class="project-link" href="[자료의 실제 주소]">관련 자료 ↗</a>
```

역할·성과·링크가 없는 항목은 해당 문단이나 링크를 생략하면 됩니다. 날짜, 과제명, 담당 역할, 성과는 실제 정보를 사용합니다.

## 게시와 확인

GitHub 저장소에서 파일을 수정해 `main` 브랜치에 저장하면 GitHub Pages가 자동으로 게시합니다. 게시 설정은 **Settings → Pages → Deploy from a branch → main → / (root)**입니다.

로컬에서는 `index.html`을 브라우저로 열면 됩니다. 외부 폰트나 JavaScript 없이 동작하며 모바일·키보드 탐색·인쇄용 스타일을 포함합니다.

공식 안내: [GitHub Pages 빠른 시작](https://docs.github.com/en/pages/quickstart)
