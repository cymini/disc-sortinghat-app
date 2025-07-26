'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    type: 'D' | 'I' | 'S' | 'C';
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "새로운 프로젝트를 시작할 때 나는...",
    options: [
      { text: "빠르게 결정하고 즉시 실행한다", type: "D" },
      { text: "팀원들과 아이디어를 공유하며 시작한다", type: "I" },
      { text: "기존 방식을 참고하여 안전하게 시작한다", type: "S" },
      { text: "모든 세부사항을 계획하고 체계적으로 시작한다", type: "C" }
    ]
  },
  {
    id: 2,
    text: "갈등 상황에서 나는...",
    options: [
      { text: "직접적으로 문제를 해결하려 한다", type: "D" },
      { text: "대화를 통해 분위기를 개선하려 한다", type: "I" },
      { text: "모든 사람이 만족할 수 있는 방법을 찾는다", type: "S" },
      { text: "논리적으로 분석하여 최선의 해결책을 찾는다", type: "C" }
    ]
  },
  {
    id: 3,
    text: "일할 때 나는...",
    options: [
      { text: "결과와 성과에 집중한다", type: "D" },
      { text: "팀워크와 협력을 중요하게 생각한다", type: "I" },
      { text: "안정성과 일관성을 추구한다", type: "S" },
      { text: "정확성과 품질을 최우선으로 한다", type: "C" }
    ]
  },
  {
    id: 4,
    text: "변화에 대해 나는...",
    options: [
      { text: "변화를 기회로 보고 적극적으로 수용한다", type: "D" },
      { text: "변화를 흥미롭게 생각하고 새로운 가능성을 본다", type: "I" },
      { text: "변화에 적응하지만 점진적으로 진행하기를 원한다", type: "S" },
      { text: "변화의 필요성을 분석하고 신중하게 접근한다", type: "C" }
    ]
  },
  {
    id: 5,
    text: "의사결정을 할 때 나는...",
    options: [
      { text: "빠르게 결정하고 행동한다", type: "D" },
      { text: "직감과 감정을 중요하게 생각한다", type: "I" },
      { text: "다른 사람들의 의견을 고려한다", type: "S" },
      { text: "사실과 데이터를 바탕으로 결정한다", type: "C" }
    ]
  },
  {
    id: 6,
    text: "스트레스 상황에서 나는...",
    options: [
      { text: "문제를 해결하기 위해 더 적극적으로 행동한다", type: "D" },
      { text: "긍정적인 면을 찾아보려 노력한다", type: "I" },
      { text: "차분하게 상황을 파악하고 대응한다", type: "S" },
      { text: "체계적으로 문제를 분석하고 해결한다", type: "C" }
    ]
  },
  {
    id: 7,
    text: "팀 프로젝트에서 나는...",
    options: [
      { text: "리더 역할을 맡아 이끈다", type: "D" },
      { text: "분위기를 띄우고 팀원들을 격려한다", type: "I" },
      { text: "조용히 맡은 역할을 성실히 수행한다", type: "S" },
      { text: "계획과 자료를 꼼꼼히 준비한다", type: "C" }
    ]
  },
  {
    id: 8,
    text: "새로운 사람을 만날 때 나는...",
    options: [
      { text: "먼저 다가가서 인사한다", type: "D" },
      { text: "자연스럽게 대화를 시작한다", type: "I" },
      { text: "상대가 먼저 다가오길 기다린다", type: "S" },
      { text: "상대방을 관찰하며 신중히 접근한다", type: "C" }
    ]
  },
  {
    id: 9,
    text: "문제가 발생했을 때 나는...",
    options: [
      { text: "즉시 해결책을 찾으려 한다", type: "D" },
      { text: "주변 사람들과 상의한다", type: "I" },
      { text: "상황을 차분히 받아들인다", type: "S" },
      { text: "원인과 과정을 분석한다", type: "C" }
    ]
  },
  {
    id: 10,
    text: "여가 시간에 나는...",
    options: [
      { text: "새로운 도전을 시도한다", type: "D" },
      { text: "사람들과 어울려 논다", type: "I" },
      { text: "가족이나 가까운 친구와 시간을 보낸다", type: "S" },
      { text: "혼자만의 시간을 가지며 취미를 즐긴다", type: "C" }
    ]
  },
  {
    id: 11,
    text: "업무 마감이 다가올 때 나는...",
    options: [
      { text: "속도를 높여 마무리한다", type: "D" },
      { text: "주변에 도움을 요청한다", type: "I" },
      { text: "계획대로 차분히 진행한다", type: "S" },
      { text: "체크리스트로 꼼꼼히 점검한다", type: "C" }
    ]
  },
  {
    id: 12,
    text: "실수했을 때 나는...",
    options: [
      { text: "즉시 인정하고 해결책을 찾는다", type: "D" },
      { text: "주변에 상황을 설명한다", type: "I" },
      { text: "조용히 반성하고 개선한다", type: "S" },
      { text: "원인을 분석하고 재발 방지를 고민한다", type: "C" }
    ]
  },
  {
    id: 13,
    text: "새로운 기술을 배울 때 나는...",
    options: [
      { text: "직접 해보며 익힌다", type: "D" },
      { text: "함께 배우는 사람들과 소통한다", type: "I" },
      { text: "차근차근 따라하며 익힌다", type: "S" },
      { text: "이론과 원리를 먼저 공부한다", type: "C" }
    ]
  },
  {
    id: 14,
    text: "회의에서 나는...",
    options: [
      { text: "핵심만 빠르게 말한다", type: "D" },
      { text: "분위기를 밝게 만든다", type: "I" },
      { text: "다른 사람의 의견을 경청한다", type: "S" },
      { text: "메모하며 중요한 내용을 정리한다", type: "C" }
    ]
  },
  {
    id: 15,
    text: "목표를 세울 때 나는...",
    options: [
      { text: "도전적인 목표를 세운다", type: "D" },
      { text: "주변과 공유하며 동기부여한다", type: "I" },
      { text: "현실적이고 달성 가능한 목표를 세운다", type: "S" },
      { text: "구체적이고 측정 가능한 목표를 세운다", type: "C" }
    ]
  },
  {
    id: 16,
    text: "여러 사람이 모인 자리에서 나는...",
    options: [
      { text: "주도적으로 이끈다", type: "D" },
      { text: "분위기를 띄운다", type: "I" },
      { text: "조용히 분위기를 지켜본다", type: "S" },
      { text: "관찰하며 분석한다", type: "C" }
    ]
  },
  {
    id: 17,
    text: "실패를 경험했을 때 나는...",
    options: [
      { text: "다시 도전한다", type: "D" },
      { text: "주변의 응원을 받으며 극복한다", type: "I" },
      { text: "스스로를 다독이며 극복한다", type: "S" },
      { text: "실패 원인을 분석한다", type: "C" }
    ]
  },
  {
    id: 18,
    text: "정보를 얻을 때 나는...",
    options: [
      { text: "핵심만 빠르게 파악한다", type: "D" },
      { text: "사람들과 공유하며 얻는다", type: "I" },
      { text: "신뢰할 수 있는 출처를 찾는다", type: "S" },
      { text: "여러 자료를 비교 분석한다", type: "C" }
    ]
  },
  {
    id: 19,
    text: "동료와의 갈등이 생기면 나는...",
    options: [
      { text: "직접적으로 대화한다", type: "D" },
      { text: "중재자를 통해 해결한다", type: "I" },
      { text: "상대방을 이해하려 노력한다", type: "S" },
      { text: "문제의 원인을 논리적으로 설명한다", type: "C" }
    ]
  },
  {
    id: 20,
    text: "성공을 정의할 때 나는...",
    options: [
      { text: "목표 달성과 성과", type: "D" },
      { text: "좋은 인간관계와 영향력", type: "I" },
      { text: "안정과 조화", type: "S" },
      { text: "지식과 전문성", type: "C" }
    ]
  },
  {
    id: 21,
    text: "새로운 규칙이나 정책이 생기면 나는...",
    options: [
      { text: "필요하다면 개선을 제안한다", type: "D" },
      { text: "주변 사람들과 의견을 나눈다", type: "I" },
      { text: "조용히 따르며 적응한다", type: "S" },
      { text: "세부 내용을 꼼꼼히 확인한다", type: "C" }
    ]
  },
  {
    id: 22,
    text: "여러 가지 일을 동시에 해야 할 때 나는...",
    options: [
      { text: "우선순위를 정해 빠르게 처리한다", type: "D" },
      { text: "주변과 협력해 분담한다", type: "I" },
      { text: "하나씩 차근차근 처리한다", type: "S" },
      { text: "계획표를 만들어 체계적으로 관리한다", type: "C" }
    ]
  },
  {
    id: 23,
    text: "칭찬을 받을 때 나는...",
    options: [
      { text: "더 잘하려고 동기부여된다", type: "D" },
      { text: "주변과 기쁨을 나눈다", type: "I" },
      { text: "겸손하게 받아들인다", type: "S" },
      { text: "구체적으로 어떤 점이 좋았는지 궁금해한다", type: "C" }
    ]
  },
  {
    id: 24,
    text: "새로운 아이디어가 떠오르면 나는...",
    options: [
      { text: "바로 실행에 옮긴다", type: "D" },
      { text: "주변에 공유하고 피드백을 받는다", type: "I" },
      { text: "실현 가능성을 신중히 생각한다", type: "S" },
      { text: "자료를 찾아보고 분석한다", type: "C" }
    ]
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: 'D' | 'I' | 'S' | 'C' }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleAnswer = (type: 'D' | 'I' | 'S' | 'C') => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: type
    }));

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
      }, 300);
    } else {
      // 마지막 질문이면 결과 페이지로 이동
      setIsSubmitting(true);
      setTimeout(() => {
        const result = calculateResult();
        router.push(`/result?type=${result}`);
      }, 500);
    }
  };

  const calculateResult = (): string => {
    const scores = { D: 0, I: 0, S: 0, C: 0 };
    
    Object.values(answers).forEach(answer => {
      scores[answer]++;
    });

    // 가장 높은 점수를 가진 유형 반환
    const maxScore = Math.max(...Object.values(scores));
    const result = Object.entries(scores).find(([_, score]) => score === maxScore)?.[0] || 'S';
    
    return result;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-purple-200 hover:text-white transition-colors mb-4 inline-block">
            ← 홈으로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">
            DISC 성격 유형 테스트
          </h1>
          <p className="text-purple-200">
            질문 {currentQuestion + 1} / {questions.length}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white/20 rounded-full h-2 mb-8">
          <div 
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">
            {questions[currentQuestion].text}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.type)}
                disabled={isSubmitting}
                className="w-full bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl p-4 text-left transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="text-white font-medium">{option.text}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isSubmitting && (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <p className="text-purple-200 mt-4">결과를 분석하고 있습니다...</p>
          </div>
        )}
      </div>
    </div>
  );
} 