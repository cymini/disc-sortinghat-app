'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface PersonalityType {
  type: string;
  title: string;
  emoji: string;
  color: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  challenges: string[];
  workStyle: string;
  communication: string;
}

const personalityTypes: { [key: string]: PersonalityType } = {
  D: {
    type: 'D',
    title: '지배형 (Dominance)',
    emoji: '🔥',
    color: 'red',
    description: '직접적이고 도전적인 리더십을 가진 타입입니다. 빠른 의사결정과 결과 지향적인 접근을 선호합니다.',
    characteristics: [
      '직접적이고 솔직한 의사소통',
      '빠른 의사결정과 실행',
      '도전적이고 경쟁적인 성향',
      '결과와 성과에 집중',
      '자신감과 독립성'
    ],
    strengths: [
      '강력한 리더십과 의사결정 능력',
      '목표 달성에 대한 강한 의지',
      '변화와 혁신을 주도하는 능력',
      '위기 상황에서의 빠른 대응',
      '직접적이고 명확한 의사소통'
    ],
    challenges: [
      '다른 사람의 감정을 고려하지 않을 수 있음',
      '인내심이 부족할 수 있음',
      '세부사항보다 큰 그림에 집중',
      '갈등 상황에서 공격적일 수 있음',
      '팀워크보다 개인 성과에 집중'
    ],
    workStyle: '빠르고 효율적인 작업을 선호하며, 명확한 목표와 기한이 있는 프로젝트에서 뛰어난 성과를 보입니다.',
    communication: '직접적이고 간결한 의사소통을 선호하며, 불필요한 설명보다는 핵심만 전달하는 것을 좋아합니다.'
  },
  I: {
    type: 'I',
    title: '영향형 (Influence)',
    emoji: '⭐',
    color: 'yellow',
    description: '낙관적이고 사교적인 타입입니다. 사람들과의 관계를 중요하게 생각하며, 긍정적인 분위기를 만드는 데 능숙합니다.',
    characteristics: [
      '낙관적이고 긍정적인 태도',
      '사교적이고 친근한 성격',
      '창의적이고 혁신적인 사고',
      '팀워크와 협력을 중시',
      '감정적이고 직관적인 의사결정'
    ],
    strengths: [
      '뛰어난 대인관계 능력',
      '동기부여와 영감을 주는 능력',
      '창의적이고 혁신적인 아이디어',
      '긍정적인 분위기 조성',
      '팀 빌딩과 협력 촉진'
    ],
    challenges: [
      '감정에 치우친 의사결정',
      '세부사항 관리의 어려움',
      '시간 관리의 부족',
      '갈등 상황 회피 경향',
      '과도한 낙관주의'
    ],
    workStyle: '협력적이고 창의적인 환경에서 뛰어난 성과를 보이며, 팀 프로젝트나 고객 서비스 분야에서 탁월합니다.',
    communication: '열정적이고 표현력 있는 의사소통을 하며, 스토리텔링과 비유를 통해 메시지를 전달하는 것을 좋아합니다.'
  },
  S: {
    type: 'S',
    title: '안정형 (Steadiness)',
    emoji: '🌱',
    color: 'green',
    description: '인내심 있고 협조적인 타입입니다. 안정성과 일관성을 추구하며, 다른 사람들을 지원하는 데 뛰어납니다.',
    characteristics: [
      '인내심과 이해심',
      '협조적이고 지원적인 태도',
      '안정성과 일관성 추구',
      '신뢰성과 책임감',
      '평화로운 환경 선호'
    ],
    strengths: [
      '뛰어난 팀워크와 협력 능력',
      '안정적이고 신뢰할 수 있는 성과',
      '갈등 해결과 중재 능력',
      '지속적이고 꾸준한 작업',
      '다른 사람을 지원하는 능력'
    ],
    challenges: [
      '변화에 대한 저항',
      '의사결정의 지연',
      '자신의 의견 표현 부족',
      '과도한 완벽주의',
      '새로운 도전에 대한 두려움'
    ],
    workStyle: '안정적이고 예측 가능한 환경에서 뛰어난 성과를 보이며, 지원적이고 협력적인 역할에서 탁월합니다.',
    communication: '신중하고 배려심 있는 의사소통을 하며, 다른 사람의 감정을 고려하여 메시지를 전달합니다.'
  },
  C: {
    type: 'C',
    title: '신중형 (Conscientiousness)',
    emoji: '📊',
    color: 'blue',
    description: '정확하고 체계적인 타입입니다. 품질과 정확성을 중요하게 생각하며, 논리적이고 분석적인 접근을 선호합니다.',
    characteristics: [
      '정확성과 품질에 대한 집착',
      '논리적이고 분석적인 사고',
      '체계적이고 조직적인 접근',
      '사실과 데이터 기반 의사결정',
      '완벽주의적 성향'
    ],
    strengths: [
      '뛰어난 분석 능력',
      '정확하고 신뢰할 수 있는 작업',
      '체계적인 문제 해결',
      '품질 관리와 세부사항 관리',
      '논리적이고 객관적인 판단'
    ],
    challenges: [
      '과도한 완벽주의',
      '의사결정의 지연',
      '유연성 부족',
      '감정적 소통의 어려움',
      '변화에 대한 저항'
    ],
    workStyle: '정확성과 품질이 중요한 환경에서 뛰어난 성과를 보이며, 분석적이고 체계적인 작업에서 탁월합니다.',
    communication: '정확하고 논리적인 의사소통을 하며, 사실과 데이터를 바탕으로 메시지를 전달합니다.'
  }
};

export default function ResultPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'S';
  const personality = personalityTypes[type];

  if (!personality) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">결과를 찾을 수 없습니다</h1>
          <Link href="/" className="text-purple-200 hover:text-white">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-purple-200 hover:text-white transition-colors mb-4 inline-block">
            ← 홈으로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">
            DISC 성격 유형 결과
          </h1>
        </div>

        {/* Result Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{personality.emoji}</div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {personality.title}
            </h2>
            <p className="text-purple-200 text-lg">
              {personality.description}
            </p>
          </div>

          {/* Characteristics */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">주요 특징</h3>
              <ul className="space-y-2">
                {personality.characteristics.map((char, index) => (
                  <li key={index} className="text-purple-100 flex items-start">
                    <span className="text-purple-300 mr-2">•</span>
                    {char}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">강점</h3>
              <ul className="space-y-2">
                {personality.strengths.map((strength, index) => (
                  <li key={index} className="text-green-200 flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">개선할 점</h3>
            <ul className="space-y-2">
              {personality.challenges.map((challenge, index) => (
                <li key={index} className="text-orange-200 flex items-start">
                  <span className="text-orange-400 mr-2">⚠</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Work Style & Communication */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">작업 스타일</h3>
              <p className="text-purple-100 leading-relaxed">
                {personality.workStyle}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">의사소통 스타일</h3>
              <p className="text-purple-100 leading-relaxed">
                {personality.communication}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <Link 
            href="/quiz"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mr-4"
          >
            🔄 다시 테스트하기
          </Link>
          <Link 
            href="/"
            className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 border border-white/20"
          >
            🏠 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
} 