  let people       = parseInt(prompt("몇 명이 참가하나요?")) 
  const $input     = document.querySelector("#relayInput") // 끝말잇기 인풋
  const $btn       = document.querySelector("#btn") // 입력 버튼
  const $word      = document.querySelector("#word") // 단어 출력
  const $order     = document.querySelector("#order") // 차례 출력
  const $round     = document.querySelector("#rounder") // 라운드 출력
  const $timer     = document.querySelector("#timer") // 타이머 출력
  const $form      = document.querySelector("#form") // 인풋과 버튼을 감싼 form
  const restartBtn = document.createElement("button") // 게임 리셋 버튼

  let word 
  let newWord 
  let cnt = 1
  let timer
  const wordRecord = []

  $input.focus()

  const round = () => {
    const rr = parseInt((cnt - 1) / people) + 1
    const c = parseInt((cnt - 1) % people) + 1
    $order.textContent = c + "번째 참가자"
    $round.textContent = rr + "번째 라운드"
    console.log(cnt)
  }

  round()

  const onInput = (event) => {
    newWord = event.target.value
  }

  const onlyKorean= (word) => { // 한국어인가 ?
    const regex = /^[ㄱ-ㅎ|가-힣]+$/
    return regex.test(word)
  }

  const notKorean = (word) => { // 한국어가 아닌가 ? 스페이스바를 포함한 다른 문자까지 제거
    if (!onlyKorean(word)) {
      $input.value = word.replace(/[^ㄱ-ㅎ|가-힣]/g, '')
      $input.focus()
    }
  }

  const updateWordRecord = () => {
    $word.innerHTML = wordRecord.reverse().join("<br>")
  }

  const resetInput = () => {
    // 입력시에 잇풋 내용 제거 및 포커스
    $input.value = ""
    $input.focus()
  }

  const timeClear = () => {
    // 타이머
    clearInterval(timer)
    timer = startTimer(10)
  }


  const startTimer = (seconds) => {
    let remainingTime = seconds
    updateTimer(remainingTime)

    return setInterval(() => {
      remainingTime--
      updateTimer(remainingTime)
      if (remainingTime <= 0) {
        clearInterval(timer)
        endGame()
      }
    }, 1000)
  }

  const updateTimer = (seconds) => {
    $timer.textContent = `남은 시간: ${seconds}초` // 안으로 좀 집어넣어라 
  }

  const endGame = () => {
    $timer.textContent = "경기 종료"
    restartBtn.textContent = "다시 시작하기"
    $input.setAttribute("disabled", "true")
    restartBtn.addEventListener("click", () => {
      restartBtn.remove()
      init()
    })
    $timer.parentNode.appendChild(restartBtn)
  }

  const init = () => {
    people             = parseInt(prompt("몇 명이 참가하나요?")) 
    cnt                = 1
    word               = ""
    newWord            = ""
    wordRecord.length  = 0
    $word.textContent  = ""

    // 입력 필드 활성화
    $input.removeAttribute("disabled");
    // 라운드 초기화
    round();
    // 입력 필드 초기화 및 포커스
    resetInput();
    // 타이머 초기화
    timeClear();
  }

  $form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (!word) {
      word = newWord
      if ($input.value === "") {
        alert("제시어를 입력하세요 !")
        $input.focus()
        return
      }
      if (word.length < 2) {
        alert("단어는 반드시 1글자 이상이여야 합니다!")
        resetInput()
        return
      }
      wordRecord.push(word)
      updateWordRecord()
      resetInput()
      timeClear()
      cnt++
    } 
    else {
      if (word[word.length - 1] === newWord[0]) {
        if (newWord.length < 2) {
          alert("단어는 반드시 1글자 이상이여야 합니다!")
          resetInput()
          return
        }
        if (wordRecord.includes(newWord)) {
          alert("중복된 단어입니다!")
          resetInput()
          return
        }
        word = newWord
        wordRecord.push(word)
        updateWordRecord()
        resetInput()
        timeClear()
        cnt++
      } 
      else {
        $order.textContent = cnt + "번째 참가자"
        resetInput()
        alert("맞지 않은 단어입니다!")
        return
      }
    }
    round()
  })

  $input.addEventListener("input", onInput)
  $input.addEventListener("input", function(event) {
    notKorean(event.target.value);
  })
  timer = startTimer(10)